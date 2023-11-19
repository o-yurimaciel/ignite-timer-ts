import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './style'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Not finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Pending</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Not finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Pending</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
