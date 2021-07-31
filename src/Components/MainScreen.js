import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import MyTestsScreen from './MyTestsScreen';
import axios from 'axios';

export default function MainScreen() {
  const [tab, setTab] = useState('Upcoming Tests')
  const [mytests, setMytests] = useState()
  const [oldTest, setOldTest] = useState([])
  const [upcomingTest, setUpcomingTest] = useState([])

  async function getData() {
    try {
      const userId = 19400
      var ut = []
      var pt = []
      let url = `http://35.244.47.202:5000/api/testcreation/mytests/${userId}`
      var flag = 1

      var res = await axios.get(url)
      res.data.map(test => {
        if (flag) {
          ut.push({
            test_id: test.test_id,
            test_name: test.test_name,
            test_start_datetime: test.test_start_datetime,
            test_end_datetime: test.test_end_datetime,
            test_duration: test.test_duration,
            user_id: userId,
          })
        } else {
          pt.push({
            test_id: test.test_id,
            test_name: test.test_name,
            test_start_datetime: test.test_start_datetime,
            test_end_datetime: test.test_end_datetime,
            test_duration: test.test_duration,
            user_id: userId,
          })
        }
      })
      setUpcomingTest(ut)
      setMytests(ut)
      setOldTest(pt)
      console.log(ut)
    } catch (er) { console.log(er) }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div style={{ paddingTop: "50px" }}>
      <Button onClick={() => { setTab("Upcoming Tests"); setMytests(upcomingTest) }} variant="contained" color="secondary" style={{ marginRight: "30px" }}> Upcoming Tests</Button>
      <Button onClick={() => { setTab("Past Tests"); setMytests(oldTest) }} variant="contained" color="secondary" > Past Tests</Button>
      <MyTestsScreen tab={tab} mytests={mytests} />
    </div>
  )
}
