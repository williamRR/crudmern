import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as actualTaskDispatcher from '../actions/actualTaskDispatcher'
import * as taskListDispatcher from '../actions/taskListDispatcher'
import UserList from '../components/UsersList/UsersList'
import Formulario from '../components/Formulario/Formulario'

const UsersList = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isModalOPen, setIsModalOpen] = useState(false)
  const [taskId, setTaskId] = useState("")
  const {
    tasks,
    setTasks,
    resetTask
  } = taskListDispatcher.useTaskList()

  const {
    completedTask,
    setCompletedTask,
    resetCompletedTask
  } = actualTaskDispatcher.useCompletedTask()

  //List
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`)
    setIsLoading(true)
  }

  const handleEdit = async (id) => {
    setTaskId(id)
    fetchUser(id)
    setIsModalOpen(true)
  }

  const fetchOptions = async () => {
    const { data } = await axios.get('http://localhost:4000/api/users')
    setTasks(data)
  }

  //Modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    resetCompletedTask()
    setTaskId("")
  }

  const fetchUser = async (id) => {
    let { data } = await axios.get(`http://localhost:4000/api/users/${id}`)
    setCompletedTask({
      firstName: data.firstName,
      secondName: data.secondName,
    })
  }

  const handlePost = async () => {
    let response = await axios.post('http://localhost:4000/api/users', completedTask)
    if (response.statusText === "OK")
      setIsLoading(true)
  }

  const handlePut = async () => {
    let response = await axios.put(`http://localhost:4000/api/users/${taskId}`, completedTask)
    if (response.statusText === "OK")
      setIsLoading(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTaskId("")
    setIsModalOpen(false)
    resetCompletedTask()
    if (taskId)
      handlePut()
    else
      handlePost()
  }

  useEffect(() => {
    if (isLoading) {
      fetchOptions()
      setIsLoading(false)
    }
  }, [isLoading])

  return (
    <React.Fragment>
      <Formulario 
        completedTask={completedTask}
        setCompletedTask={setCompletedTask}
        handleSubmit={handleSubmit}
        isModalOPen={isModalOPen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <UserList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </React.Fragment>
  )
}

export default UsersList
