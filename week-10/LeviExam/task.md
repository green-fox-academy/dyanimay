Quora application
GET /
- loads the main page and lists the 5 recent questions with a link to it
- the main page also contains a form to submit a new question
GET /q/:id
- loads a specific question page where it lists the answers as well
- it contains a form to answer that specific question
<!-- POST /api/questions
- receives a json like: { "question": "What are callback functions in js?" }
- responds with { "id": 1, "question": "What are callback functions in js?" } and 200 status code -->
<!-- POST /api/questions/:id/answers
- receives a json like { "answer": "just a function" } ??????AZ JÓ AMI VAN?
- responds with 204 status code and no body -->
<!-- GET /api/questions/:id --DONE
- responsd with the question and its answers like: { "id": 1, "question": "What are callback functions in js?", "answers": [{ "id": 1, "message": "just a function"}] } -->
<!-- GET /api/questions/ 
- by default responds with all the stored questions in this json format: [{ "id": 1, "question": "What are callback functions in js?" }, {"id": 2, "question": "What day is it?"} ]
- if the limit query parameter is set then it will respond only that amount e.g. GET /api/questions?limit=5 will only send back the 5 recent questions
- if the offset query parameter is set then it will skip the first X questions e.g. GET /api/questions?limit=5&offset=5 will send from the 5th to the 10th question -->

GET / and GET /q/:id are the frontend part of this applicaton and the /api ones are the backend
valami
```
valami
valami
```
vim task.md
shift-g to jump to last line
a or o to start write
write the right solution then escape and :wq

