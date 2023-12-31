package com.example.backend.util.emailsender;

import java.util.Random;
import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class EmailSender {

    private final JavaMailSender javaMailSender;
    private String ePw;

    private MimeMessage createMessage(String to) throws Exception {
        this.ePw = createKey();
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(Message.RecipientType.TO, to);//보내는 대상
        message.setSubject("이메일 인증 테스트");//제목

        String msgg = "";
        msgg += "<div style='margin:20px;'>";
        msgg += "<h1> 안녕하세요 부산와Vr입니다. </h1>";
        msgg += "<br>";
        msgg += "<p>아래 코드를 복사해 입력해주세요<p>";
        msgg += "<br>";
        msgg += "<p>감사합니다.<p>";
        msgg += "<br>";
        msgg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg += "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        msgg += "<div style='font-size:130%'>";
        msgg += "CODE : <strong>";
        msgg += ePw + "</strong><div><br/> ";
        msgg += "</div>";
        message.setText(msgg, "utf-8", "html");//내용
        message.setFrom(new InternetAddress("busanwavr@gmail.com", "BusanWaVr"));//보내는 사람

        return message;
    }


    public static String createKey() {
        String key = "";
        Random rnd = new Random();

        for (int i = 0; i < 6; i++) { // 인증코드 6자리
            int number = rnd.nextInt(10); // 0~9 까지 랜덤
            key += Integer.toString(number);
        }
        return key;
    }

    public String sendSimpleMessage(String to) throws Exception {
        // TODO Auto-generated method stub
        MimeMessage message = createMessage(to);
        try {//예외처리
            javaMailSender.send(message);
        } catch (Exception es) {
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return this.ePw;
    }
}
