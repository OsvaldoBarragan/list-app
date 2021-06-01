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

    // const getId = function (list) {
    //   const idNum = []
    //   for (let i = 0; i < list.length - 990; i++) {
    //     if (list[i].name === null) {
    //     } else if (list[i].name === '') {
    //     } else {
    //       idNum.push(list[i].id)
    //     }
    //   }
    //   return idNum
    // }
    //
    // const getListId = function (list) {
    //   const listIdNum = []
    //   for (let i = 0; i < list.length - 990; i++) {
    //     if (list[i].name === null) {
    //     } else if (list[i].name === '') {
    //     } else {
    //       listIdNum.push(list[i].listId)
    //     }
    //   }
    //   return listIdNum
    // }
    //
    // const getName = function (list) {
    //   const name = []
    //   for (let i = 0; i < list.length - 990; i++) {
    //     if (list[i].name === null) {
    //     } else if (list[i].name === '') {
    //     } else {
    //       name.push(list[i].id)
    //     }
    //   }
    //   return name
    // }
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
    //     'name': '10'
    //   }
    // ]

    // const numbers = [3, 4, 1, 2, 5, 9, 2, 20, 18, 48, 29]

    // const sorted = objects.slice().sort(function (a, b) {
    //   return a - b
    // })

    // console.log(sorted)
    // console.log('This is getId: ', getId(lists))
    // console.log('This is getListId: ', getListId())
    // console.log('This is getName: ', getName())

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
                lists.map((list, index) => {
                  if (list.name !== null && list.name !== '') {
                    if (list.listId === 1) {
                      return <TableRow key={index}>
                        <TableCell align="right">{list.id}</TableCell>
                        <TableCell align="right">{list.listId}</TableCell>
                        <TableCell align="right">{list.name}</TableCell>
                      </TableRow>
                    }
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