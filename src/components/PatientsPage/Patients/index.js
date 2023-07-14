import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useAppContext } from '../../../AppContext';
import * as api from '../../../api/patient';
import AddPatientForm from './AddPatientForm';
import NoDataCard from '../../NoDataComponent';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Patients = () => {
  const { state: { viewMode } } = useAppContext();
  const [state, _setState] = React.useState({
    patients: [],
    loading: false,
    error: ''
  });

  const setState = s => _setState(prev => ({
    ...prev,
    ...(typeof s === 'function' ? s(prev) : s),
  }));


  const {patients} = state

React.useEffect(() => {
  (async () => {
    setState({ loading: true, });
    try {
      const patients  = await api.getAll();
      setState({ patients: patients || [], loading: false, });
    } catch (e) {
      setState({loading: false, error: e})
    }
  })();
}, []);

  return (
    <>
    <Card>
        <CardHeader
          action={viewMode === 'view' ? null : (
            <>
              <AddPatientForm updateState={setState} />
            </>
          )}
          title="Patients"
        />
         {patients.length<=0?
         (<NoDataCard />)
         :
        (<CardContent>
           
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>ID-Number</TableCell>
                <TableCell>Age (Years)</TableCell>
                {viewMode === 'view' ? null : <TableCell align="right">Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((p, i) => {
                return (
                  <TableRow key={`patients-${i}`}>
                    <TableCell>{p.firstName}</TableCell>
                    <TableCell>{p.lastName}</TableCell>
                    <TableCell>{p.idNumber}</TableCell>
                    <TableCell>{p.age}</TableCell>
                    {viewMode === 'view' ? null : (
                      <TableCell align="right">
                        {<Link to="/patients/view" state={p}>
                         <Button color='primary'>
                         Manage Patient
                         </Button>
                        </Link>}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
    
        </CardContent>
      )}
      </Card>
    </>
  );
};

export default Patients;
