public class ChangeUpperAndLowerCase {
    public String solution(String input) {
        String answer = "";

        for (char x : input.toCharArray()) {
            if (Character.isLowerCase(x)) {
                answer += Character.toUpperCase(x);
            } else {
                answer += Character.toLowerCase(x);
            }
        }

        return answer;
    }
}
