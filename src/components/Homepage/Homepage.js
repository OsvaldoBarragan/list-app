import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Spinner from 'react-bootstrap/Spinner'

class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lists: [],
      isLoading: true
    }
  }

  componentDidMount () {
    fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ lists: json })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  render () {
    const { lists } = this.state

    if (!lists) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const groupLists = function () {
      const listId1 = []
      const listId2 = []
      const listId3 = []
      const listId4 = []

      for (let i = 0; i < lists.length; i++) {
        const list = lists[i]

        if (list.listId === 1) {
          listId1.push(list)
        } else if (list.listId === 2) {
          listId2.push(list)
        } else if (list.listId === 3) {
          listId3.push(list)
        } else if (list.listId === 4) {
          listId4.push(list)
        }
      }

      return {
        'one': listId1,
        'two': listId2,
        'three': listId3,
        'four': listId4
      }
    }

    const lowestToHighest = function (lists) {
      const lts = lists
      return lts.sort((a, b) => a.id - b.id)
    }

    const sortedList1 = lowestToHighest(groupLists().one)
    const sortedList2 = lowestToHighest(groupLists().two)
    const sortedList3 = lowestToHighest(groupLists().three)
    const sortedList4 = lowestToHighest(groupLists().four)

    console.log(sortedList1[2])

    // console.log(sortedList1)

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className='indexTable' stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right" id='headerColor1'>listId</TableCell>
                <TableCell align="right" id='headerColor2'>name</TableCell>
                <TableCell align="right" id='headerColor3'>id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                sortedList1.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right" className='listId1'>{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                      <TableCell align="right">{list.id}</TableCell>
                    </TableRow>
                  }
                })
              }
              {
                sortedList2.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right" className='listId2'>{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                      <TableCell align="right">{list.id}</TableCell>
                    </TableRow>
                  }
                })
              }
              {
                sortedList3.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right" className='listId3'>{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                      <TableCell align="right">{list.id}</TableCell>
                    </TableRow>
                  }
                })
              }
              {
                sortedList4.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right" className='listId4'>{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                      <TableCell align="right">{list.id}</TableCell>
                    </TableRow>
                  }
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default withRouter(Homepage)
