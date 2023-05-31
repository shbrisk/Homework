namespace ShirtCreator {
    internal class CreateShirt {
        static void Main(string[] args) {
            new CreateShirt();
        }
        public CreateShirt() {
            string[] colors = { "red", "green", "blue" };
            string[] pattern = { "striped", "checked", "plain" };
            Shirt[] shirts = new Shirt[colors.Length * pattern.Length];

            // Create the Shirts
            for(int i = 0; i < colors.Length; i++) {
                for(int j = 0; j < pattern.Length; j++) {
                    shirts[i*j] = new Shirt(colors[i], pattern[j]);
                }
            }
            // Print the Shirts
            for(int i = 0; i < shirts.Length * pattern.Length; i++) {
                shirts[i].PrintShirt();
            }
        }
        internal class Shirt {
            string color;
            string pattern;
            public Shirt(string color, string pattern) {
                this.color = color;
                this.pattern = pattern;
            }
            public void PrintShirt() {
                Console.WriteLine($"I am a {color} shirt with a {pattern} pattern");
            }
        }
    }
}