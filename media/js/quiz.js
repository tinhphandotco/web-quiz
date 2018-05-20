$(document).ready(function() {
    
    const nopBai = (quiz_id, result) => {
        clearInterval(interval_countdown);
        let data = {
            quiz_id,
            results: result.reduce((cur, next) => {
                return {
                    ...cur,
                    [next.name]: {
                        question_id: next.name, 
                        answers: [...(cur[next.name] ? cur[next.name].answers : []), next.value]
                    }
                }
            }, {}),
            s: _s,
            time_completed,
        }
        $.ajax({
            url: "/quiz/finish/quiz_id=123",
            method: "POST",
            dataType: "JSON",
            data,
            success: res => {
                console.log(res);
            }
        })
    }
    
    
    $("#form-quiz-start").on("submit", function(e) {
        e.preventDefault();
        
        const quiz_id = $(this).attr("quizId");
        const result = $( this ).serializeArray();
        
        nopBai(quiz_id, result);
    })
})
