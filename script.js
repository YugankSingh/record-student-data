$("#button").click(() => {
	var rollNo = $("#roll-no").val()
	var name = $("#name").val()
	var marks = $("#marks").val()
	if (name && marks && rollNo) {
		$("#output-container").append(
			"<div class='output'>Roll no - <p class='output-data'>  " +
				rollNo +
				" </p>, <p class='output-data'> " +
				name +
				" </p> has succeeded <p class='output-data'> " +
				marks +
				" </p> marks</div>"
		)
	}
	var rollNo = $("#roll-no").val("")
	var name = $("#name").val("")
	var marks = $("#marks").val("")

	console.log(rollNo, name, marks)
})
$("form").on("submit", function (e) {
	e.preventDefault()
})
