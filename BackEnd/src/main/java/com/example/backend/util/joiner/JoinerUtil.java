package com.example.backend.util.joiner;

import com.example.backend.dto.joiner.JoinerDto;
import com.example.backend.model.joiner.Joiner;
import com.example.backend.model.joiner.JoinerRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JoinerUtil {

    private final JoinerRepository joinerRepository;

    public void joinerDtoList(Long tourId, List<JoinerDto> joinerDtos) {
        List<Joiner> joinerList = joinerRepository.findAllByTourId(tourId);
        for (Joiner joiner : joinerList) {
            JoinerDto joinerDto = new JoinerDto(joiner.getUser().getProfileImg(),
                    joiner.getUser().getNickname(), joiner.getJoinDate());
            joinerDtos.add(joinerDto);
        }
    }
}
