package com.example.backend.dto.user;

import com.example.backend.model.user.User;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserLoginDto {

    private long userId;
    private String email;
    private String nickname;
    private String profileImg;
    private List<String> category;
    private String type;
    private String Access_Token;
    private String Refresh_Token;

    public UserLoginDto(User user, String access, String refresh, List<String> category) {
        this.userId = user.getId();
        this.email = user.getEmail();
        this.nickname = user.getNickname();
        this.profileImg = user.getProfileImg();
        this.type = user.getType().toString();
        this.Access_Token = access;
        this.Refresh_Token = refresh;
        this.category = category;
    }

}
