/* global google*/
(async function () {
    'use strict';

    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const lakewood = { lat: 40.09564277325912, lng: -74.22203857900014 };

    const map = new Map(
        document.querySelector('#map'), {
        zoom: 16,
        center: lakewood,
        mapId: 'DEMO_MAP_ID'
    });

    const searchInput = document.querySelector('#search');
    const placeslist = document.querySelector('#sidebar ul');

    async function handleSearchSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${search.value}&maxRows=10&username=slubowsky&type=json`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const places = await response.json();

            const bounds = new google.maps.LatLngBounds();
            places.geonames.forEach(place => {
                addPlaceToMap(place);
                bounds.extend({ lat: place.lat, lng: place.lng });
                addPlaceToSidebar(place);
            });
            map.fitBounds(bounds);

        } catch (e) {
            console.error(e);
        }
    }

    const infowindow = new google.maps.InfoWindow();

    function addPlaceToMap(place) {
        let img;
        if (place.thumbnailImg) {
            img = document.createElement('img');
            img.className = 'place-img';
            img.src = place.thumbnailImg;
        }
        const marker = new AdvancedMarkerElement({
            map: map,
            position: { lat: place.lat, lng: place.lng },
            title: place.title,
            content: img
        });

        marker.addListener('click', () => {
            infowindow.setContent(`
        <h4>${place.title}</h4>
        <div>${place.summary}</div>
        <a href="https://${place.wikipediaUrl}" target="_blank">more details</a>
      `);
            infowindow.open(map, marker);
        });
    }

    function addPlaceToSidebar(place) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${place.title}</span>
                    <img src="${place.thumbnailImg}"/>
                    <div class="summary">${place.summary}<div>`;
        placeslist.appendChild(li);
        li.addEventListener('click', async () => {
            const currentlyActive = document.querySelector('.active');
            if (currentlyActive) {
                currentlyActive.className = '';
                currentlyActive.querySelector('.summary').className = 'summary';
            }

            li.className = 'active';
            li.querySelector('.summary').className = 'summary visible';
            await doAfter(() => map.panTo({ lat: place.lat, lng: place.lng }), 1000);
            await doAfter(() => map.setZoom(18), 1000);
        });
    }

    document.querySelector('form').addEventListener('submit', handleSearchSubmit);


    function doAfter(action, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(action()), delay);
        });
    }

    ////////////////

    const drawings = {
        markers: [],
        circles: [],
        rectangles: [],
        polylines: [],
        polygons: [],
    };

    const { DrawingManager } = await google.maps.importLibrary('drawing');
    const drawingManager = new DrawingManager();
    drawingManager.setMap(map);

    drawingManager.addListener('markercomplete', e => {
        const markerLoc = e.getPosition();
        drawings.markers.push({ lat: markerLoc.lat(), lng: markerLoc.lng() });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });

    drawingManager.addListener('circlecomplete', e => {
        const center = e.getCenter();
        const radius = e.getRadius();
        drawings.circles.push({ lat: center.lat(), lng: center.lng(), radius });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });

    drawingManager.addListener('rectanglecomplete', e => {
        const bounds = e.getBounds();
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        drawings.rectangles.push({ ne: { lat: ne.lat(), lng: ne.lng() }, sw: { lat: sw.lat(), lng: sw.lng() } });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });

    drawingManager.addListener('polylinecomplete', e => {
        const path = e.getPath().getArray().map(point => ({ lat: point.lat(), lng: point.lng() }));
        drawings.polylines.push(path);
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });

    drawingManager.addListener('polygoncomplete', e => {
        const path = e.getPath().getArray().map(point => ({ lat: point.lat(), lng: point.lng() }));
        drawings.polygons.push(path);
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });
    if (localStorage.drawings) {
        const savedDrawings = JSON.parse(localStorage.drawings);

        if (savedDrawings.markers) {
            savedDrawings.markers.forEach(marker => {
                new AdvancedMarkerElement({
                    map: map,
                    position: marker
                });
            });
        }

        if (savedDrawings.circles) {
            savedDrawings.circles.forEach(circle => {
                new google.maps.Circle({
                    map: map,
                    center: { lat: circle.lat, lng: circle.lng },
                    radius: circle.radius,
                });
            });
        }

        if (savedDrawings.rectangles) {
            savedDrawings.rectangles.forEach(rectangle => {
                new google.maps.Rectangle({
                    map: map,
                    bounds: {
                        north: rectangle.ne.lat,
                        south: rectangle.sw.lat,
                        east: rectangle.ne.lng,
                        west: rectangle.sw.lng,
                    },
                });
            });
        }

        if (savedDrawings.polylines) {
            savedDrawings.polylines.forEach(path => {
                new google.maps.Polyline({
                    map: map,
                    path: path,
                });
            });
        }

        if (savedDrawings.polygons) {
            savedDrawings.polygons.forEach(path => {
                new google.maps.Polygon({
                    map: map,
                    paths: path,
                });
            });
        }
    }

}());
