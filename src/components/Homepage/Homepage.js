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

    //
    // const objects = [
    //   {
    //     'id': 42,
    //     'listId': 1,
    //     'name': 'Item 42'
    //   },
    //   {
    //     'id': 48,
    //     'listId': 4,
    //     'name': 'Item 48'
    //   },
    //   {
    //     'id': 102,
    //     'listId': 2,
    //     'name': 'Item 102'
    //   },
    //   {
    //     'id': 33,
    //     'listId': 3,
    //     'name': 'Item 33'
    //   },
    //   {
    //     'id': 10,
    //     'listId': 2,
    //     'name': 'Item 10'
    //   },
    //   {
    //     'id': 58,
    //     'listId': 1,
    //     'name': 'Item 58'
    //   },
    //   {
    //     'id': 22,
    //     'listId': 2,
    //     'name': 'Item 22'
    //   },
    //   {
    //     'id': 76,
    //     'listId': 4,
    //     'name': 'Item 76'
    //   },
    //   {
    //     'id': 12,
    //     'listId': 3,
    //     'name': 'Item 12'
    //   },
    //   {
    //     'id': 19,
    //     'listId': 3,
    //     'name': 'Item 19'
    //   }
    // ]

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
      return { 'one': listId1, 'two': listId2, 'three': listId3, 'four': listId4 }
    }

    console.log(groupLists().four)

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className='indexTable' stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">listId</TableCell>
                <TableCell align="right">name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                groupLists().one.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right">{list.id}</TableCell>
                      <TableCell align="right">{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                    </TableRow>
                  }
                })
              },
              {
                groupLists().two.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right">{list.id}</TableCell>
                      <TableCell align="right">{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                    </TableRow>
                  }
                })
              },
              {
                groupLists().three.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right">{list.id}</TableCell>
                      <TableCell align="right">{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
                    </TableRow>
                  }
                })
              },
              {
                groupLists().four.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    return <TableRow key={index}>
                      <TableCell align="right">{list.id}</TableCell>
                      <TableCell align="right">{list.listId}</TableCell>
                      <TableCell align="right">{list.name}</TableCell>
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
