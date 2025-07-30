import com.microsoft.playwright.*; 

public class script {
    public static void main(String[] args) {
        try(Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(); 
    
        }
    }
}
