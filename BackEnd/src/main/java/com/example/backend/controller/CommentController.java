package com.example.backend.controller;

import com.example.backend.dto.Response;
import com.example.backend.dto.comment.CommentCreateDto;
import com.example.backend.dto.comment.CommentDetailDto;
import com.example.backend.dto.comment.CommentDto;
import com.example.backend.dto.comment.CommentUpdateDto;
import com.example.backend.security.UserDetailsImpl;
import com.example.backend.service.comment.CommentService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment/{tourId}")
    public Response<CommentCreateDto.Response> commentCreateApi(
            @AuthenticationPrincipal UserDetailsImpl userDetails,
            @RequestBody CommentCreateDto.Request request, @PathVariable Long tourId) {
        CommentCreateDto.Response response = commentService.commentCreate(userDetails.getUser(),
                request, tourId);

        return new Response<>("200", "성공적으로 댓글을 작성하였습니다.", response);
    }

    @GetMapping("/comment/{commentId}")
    public Response<CommentDetailDto.Response> commentDetail(@PathVariable Long commentId) {
        CommentDetailDto.Response response = commentService.commentDetail(commentId);

        return new Response<>("200", "성공적으로 댓글 상세 정보를 불러왔습니다.", response);
    }

    @PutMapping("/comment/{commentId}")
    public Response<CommentUpdateDto.Response> commentUpdate(
            @RequestBody CommentUpdateDto.Request request, @PathVariable Long commentId,
            @AuthenticationPrincipal UserDetailsImpl userDetails) {
        CommentUpdateDto.Response response = commentService.commentUpdate(request, commentId,
                userDetails.getUser());

        return new Response<>("200", "성공적으로 댓글 수정을 완료했습니다.", response);
    }

    @DeleteMapping("/comment/{commentId}")
    public Response commentDeleteApi(@PathVariable Long commentId,
            @AuthenticationPrincipal UserDetailsImpl userDetails) {
        commentService.commentDelete(commentId, userDetails.getUser());

        return new Response<>("200", "성공적으로 댓글 삭제를 완료했습니다.", null);
    }

    @GetMapping("/comment/tour/{tourId}")
    public Response<List<CommentDto>> getAllComment(@PathVariable Long tourId,
            @PageableDefault(size = 3) Pageable pageable) {
        Page<CommentDto> responsePage = commentService.getCommentList(tourId, pageable);
        List<CommentDto> response = responsePage.getContent();
        return new Response<>("200", "성공적으로 댓글 목록을 불러왔습니다.", response);
    }

}
