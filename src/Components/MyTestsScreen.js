import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
// import MessageBox from '../Components/MessageBox.js';
// import LoadingBox from '../Components/LoadingBox.js';


const useStyles = makeStyles((theme) => ({
  tablerow: {
    display: "flex",
    flexDirection: "row",
  },
  testName: {
    flex: "2"
  },
  tablecell: {
    flex: "1"
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  deletebutton: {
    marginLeft: "2%"
  }
}));


function MyTestsScreen({ tab, mytests }) {
  const classes = useStyles();
  function handleClick(test) {
    console.log(test.user_id, test.test_id)
  }
  return (
    <div>
      <Container>
        <h1>{tab}</h1>
        <Table >
          <TableHead>
            <TableRow className={classes.tablerow}>
              <TableCell className={classes.testName}>Name</TableCell>
              <TableCell className={classes.tablecell}>Test Start Time</TableCell>
              <TableCell className={classes.tablecell}>Test End Time</TableCell>
              <TableCell className={classes.tablecell}>Test Duration</TableCell>
              <TableCell className={classes.tablecell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          {/* {loading && (<LoadingBox></LoadingBox>)} */}
          {/* {error && (<MessageBox variant="danger">{error}</MessageBox>)} */}
          <TableBody>
            {mytests && <div>
              {mytests.map((test) => (
                <TableRow key={test.test_id} className={classes.tablerow}>
                  <TableCell className={classes.testName}>{test.test_name}</TableCell>
                  <TableCell className={classes.tablecell}>{test.test_start_datetime ? test.test_start_datetime : "NULL"}</TableCell>
                  <TableCell className={classes.tablecell}>{test.test_end_datetime ? test.test_end_datetime : "NULL"}</TableCell>
                  <TableCell className={classes.tablecell}>{test.test_duration}</TableCell>
                  <TableCell className={classes.tablecell}>
                    <div className={classes.button}>
                      {
                        tab === "Upcoming Tests"
                          ? <Button variant="contained" color="primary" onClick={() => handleClick(test)}> Start Test </Button>
                          : <Button variant="contained" color="primary" onClick={() => handleClick(test)}> Analysis </Button>
                      }
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </div>}
          </TableBody>
        </Table>
      </Container>
    </div >
  )
}

export default MyTestsScreen
