import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        String inputString = "Computercoorler";
        char findText = 'c';

        FindText p1 = new FindText();
        System.out.println(p1.solution(inputString, findText));
    }
}