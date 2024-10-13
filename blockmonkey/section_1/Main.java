class Main {
    public static void main(String[] args) {
        String inputString = "Computercoorler";
        char findText = 'c';

        FindText p1 = new FindText();
        System.out.println(p1.solution(inputString, findText));

        String p2Input = "StuDY";
        ChangeUpperAndLowerCase p2 = new ChangeUpperAndLowerCase();
        System.out.println(p2.solution(p2Input));
    }
}