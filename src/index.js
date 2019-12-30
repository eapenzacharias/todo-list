import project from './project'
import task from './task'
import './css/style.css'
import { addProject } from './dom';
import { displayInt } from './dom';

const newProj = project({
  title: 'NEW PROJECT',
  description: 'A JS project'
});

const newTask = task({
  title: 'model'
})
const newTaskOn = task({
  title: 'start interface'
})

const projectito = project({
  title: 'PROJECTITO',
  description: 'stringify'
})

const taskito = task({
  title: 'taskito'
})

displayInt();