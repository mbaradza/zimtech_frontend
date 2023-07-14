import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useAppContext } from '../AppContext';

const NoDataCard = () => {
    const NavyTypography = withStyles({
        root: {
          color: "#000EE0"
        }
      })(Typography)
const { state: { viewMode } } = useAppContext();
      
 return (
    <>
    <CardContent>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          {viewMode === 'view' ? null : <TableCell align="right">Action</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
           <br/>
           <div style={{ padding: 20 }}>
              <NavyTypography
                  style={{ textAlign:'center' }}
                > NO DATA TO SHOW</NavyTypography>
              </div>
            
             <br/>
      </TableBody>
    </Table>
    </CardContent>
    </>
 )
}


export default NoDataCard;