const express = require('express')
const app = express()
const fs = require('fs');

// use ejs files to prepare templates for views
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    // get data from file
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      // task list data from file
      const tasks = JSON.parse(data)
      resolve(tasks)
    });
  });
}	

const writeFile = (filename, data) => {
	return new Promise((resolve, reject) => {
		// get data from file
		fs.writeFile(filename, data, 'utf-8', err => {
			if (err) {
				console.error(err);
				return;
			}
			resolve(true)
		});
	})
}

app.get('/', (req, res) => {
  // tasks list data from file
  readFile('./views/tasks.json')
    .then(tasks => {
      res.render('index', { 
      	tasks: tasks,
      	error: null
    	})
    })
});

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  // Control data from the form
  let error = null;
  if (req.body.task.trim().length === 0) {
    error = 'Please insert correct task data';
    return readFile('./views/tasks.json')
      .then((tasks) => {
        res.render('index', {
          tasks: tasks,
          error: error,
        });
      });
  }

  // Tasks list data from the file
  readFile('./views/tasks.json')
    .then((tasks) => {
      // Add a new task
      // Create a new ID automatically
      let index;
      if (tasks.length === 0) {
        index = 0;
      } else {
        index = tasks[tasks.length - 1].id + 1;
      }

      // Create a task object
      const newTask = {
        "id": index,
        "task": req.body.task
      };

      // Add the form-sent task to the task array
      tasks.push(newTask);
      data = JSON.stringify(tasks, null, 2);
      return writeFile('./views/tasks.json', data);
    })
    .then(() => {
      // Redirect to / to see the result
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

app.get('/delete-task/:taskId', (req,res) => {
	let deletedTaskId = parseInt(req.params.taskId)
	readFile('./views/tasks.json')
	.then(tasks => {
		tasks.forEach((task, index) => {
			if(task.id == deletedTaskId){
				tasks.splice(index, 1)
			}
		})
		data = JSON.stringify(tasks, null, 2)
		writeFile('./views/tasks.json', data)
		// redirect to / to see result
		res.redirect('/')
	})
})

app.get('/delete-tasks', (req, res) => {
  // Read the existing tasks from the file
  readFile('./views/tasks.json')
    .then(tasks => {
      // Clear the tasks array
      tasks = [];
      data = JSON.stringify(tasks, null, 2);
      // Save the empty array back to the file
      return writeFile('./views/tasks.json', data);
    })
    .then(() => {
     // Redirect to / to see result
     res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

app.get('/update-task/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);

  readFile('./views/tasks.json')
    .then((tasks) => {
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      if (taskToUpdate) {
        res.render('update-task', {
          tasks: tasks,
          taskToUpdate: taskToUpdate,
          error: null, // Initialize the error as null when initially rendering the update form
        });
      } else {
        // Task not found, handle the error as needed
        res.status(404).send('Task not found');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

app.post('/update-task/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);

    // Control data from the form
    if (req.body.task.trim().length === 0) {
        const error = 'Please insert correct task data';
        res.render('update-task', {
            error: error,
            taskToUpdate: { id: taskId, task: '' }, // Reset the taskToUpdate
        });
    } else {
        // Tasks list data from the file
        readFile('./views/tasks.json')
            .then((tasks) => {
                const taskToUpdate = tasks.find((task) => task.id === taskId);

                if (taskToUpdate) {
                    // Update the task name
                    taskToUpdate.task = req.body.task;
                    data = JSON.stringify(tasks, null, 2);
                    return writeFile('./views/tasks.json', data);
                } else {
                    // Task not found, handle the error as needed
                    res.status(404).send('Task not found');
                }
            })
            .then(() => {
                // Redirect to / to see the result
                res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send('Internal Server Error');
            });
    }
});

app.listen(3003, () => {
	console.log('Example app is started at http://localhost:3003')
})