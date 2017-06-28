$(function () {

	$.ajax({
		url: "https://www.codeschool.com/users/1917482.json",
		dataType: 'jsonp',
		success: function (response) {
			var completedCourses = response.courses.completed;
			completedCourses.forEach(function (course) {
				var newCourseElement = $('<div>', {
					"class": 'course'
				});
				newCourseElement.append(
					$('<h3>', {
						"text": course.title
					}));

				newCourseElement.append(
					$('<img>', {
						"src": course.badge
					}));
				newCourseElement.append(
					$('<a>', {
						"href": course.url,
						"target": '_blank',
						"class": "btn btn-primary",
						"text": "See Course"
					}));

				$('#badges').append(newCourseElement);
			});
		}
	});

});