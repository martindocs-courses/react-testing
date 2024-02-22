import { PropTypes } from 'prop-types';

const tableStyling = {
  border: '1px solid red',
  borderCollapse: 'collapse',
}

const cellStyling = {
  border: '1px solid white',
  padding: '10px',
}

const UserList = ({userList}) => {

  return (
    <div>
      <h2>User List</h2>      
      {userList.length > 0 && 
        <table style={tableStyling}>
          <thead>
            <tr> 
              <th style={cellStyling}>Name</th>
              <th style={cellStyling}>Email</th>
            </tr>
          </thead>
          <tbody>

          {
            userList.map((user, index) =>{
              const{name, email} = user;
              return (
                <tr key={index}>
                  <td style={cellStyling}>{name}</td>
                  <td style={cellStyling}>{email}</td>              
                </tr>
              )
            })
          }
          </tbody>
        </table> 
      }

    </div>
  )
}

UserList.propTypes = {
  userList: PropTypes.array,
}

export default UserList;