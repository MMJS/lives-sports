'use strict'

const socket = io();

const $teamName=document.getElementById('teamName');
const $teamName1=document.getElementById('teamName1');
const $teamDetail=document.getElementById('teamDetail');
const $teamDetail1=document.getElementById('teamDetail1');
const $game=document.getElementById('game');
const $team = document.getElementById('teamDetails')
let teamdetails =[ ]

$team.addEventListener('submit',(event)=>{
    event.preventDefault();
    teamdetails.push({game:$game.value, teamName:$teamName.value , teamDetail:$teamDetail.value ,teamName1:$teamName1.value , teamDetail1:$teamDetail1.value})
    // console.log(teamdetails)


    socket.emit('teamdetails',teamdetails)
})


// // Send a message to say that I've connected
// socket.emit('newuser', {user: 'Grace Hopper'})

// // Event listener, waiting for an incoming "newuser"
// socket.on('newuser', (data) => console.log(`${data.user} has connected!`))


// Listen for the 'submit' of a form
// 	 event.preventDefault()  (prevent the form from leaving the page)
//   Emit a message using "chatmsg"
// Listen for "chatmsg"
//   add a <li> with the chat msg to the <ol>

// const $msgForm = document.getElementById('sendMsg')
// const $msgList = document.getElementById('messages')
// const $userName = document.getElementById('userInput')
// const $Name = document.getElementById('name')
// const $UserNameInput = document.getElementById("userName")
// let enteredUserName

// $userName.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	enteredUserName = event.currentTarget.userName.value
// 	socket.emit('username', { name: event.currentTarget.userName.value })
// 	if ($UserNameInput.value) {
// 		$userName.classList.add("form-chat1")
// 	}
// 	// console.log(event.currentTarget.userName.value)
// })

// socket.on('username', (data) => {
// 	console.log(`Hello ${data.name}`)
// 	$Name.innerHTML = `By : ${data.name}`
// })


// $msgForm.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	if (enteredUserName) {
// 		socket.emit('chatmsg', { msg: event.currentTarget.txt.value, user: enteredUserName })
// 	}
// 	event.currentTarget.txt.value = ''
// })





// socket.on('chatmsg', (data) => {
// 	console.log(`${data.user} : ${data.msg}`)
// 	const newMsg = document.createElement('p')
// 	$msgList.appendChild(newMsg)

// 	newMsg.textContent = data.msg
// 	if (data.user == enteredUserName) {
// 		newMsg.style.textAlign = "right"
// 		newMsg.style.color = "red"
// 		console.log("giiiii")
// 	}
// })