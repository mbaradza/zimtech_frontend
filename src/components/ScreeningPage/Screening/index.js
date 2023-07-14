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
import * as api from '../../../api/hts';
import AddScreeningForm from './AddScreeningForm';
import NoDataCard from '../../NoDataComponent';
import ScreeningManagerForm from './ScreeningForm';


const Screening = () => {
  const { state: { viewMode } } = useAppContext();
  const [state, _setState] = React.useState({
    screenings: [],
    loading: false,
    error: ''
  });

  const setState = s => _setState(prev => ({
    ...prev,
    ...(typeof s === 'function' ? s(prev) : s),
  }));


  const {screenings} = state

React.useEffect(() => {
  (async () => {
    setState({ loading: true, });
    try {
      const screenings  = await api.getAll();
      setState({ screenings: screenings || [], loading: false, });
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
              <AddScreeningForm updateState={setState} />
            </>
          )}
          title="DIABETES HTS"
        />
         {htss.length<=0?
         (<NoDataCard />)
         :
        (<CardContent>
           
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient</TableCell>
                <TableCell>Screening Date</TableCell>
                <TableCell>Blood Pressure</TableCell>
                <TableCell>Blood Glucose</TableCell> 
                <TableCell>Weight</TableCell> 
                <TableCell>Height</TableCell>   
                <TableCell></TableCell>
                {viewMode === 'view' ? null : <TableCell align="right">Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {screenings.map((h, i) => {
                return (
                  <TableRow key={`hts-${i}`}>
                    <TableCell>{h.patientHts.patient.firstName} &nbsp; {h.patientHts.patient.lastName}</TableCell>
                    <TableCell>{h.time}</TableCell>
                    <TableCell>{h.systolic}/{h.dystolic}</TableCell>
                    <TableCell>{h.weight}</TableCell>
                    <TableCell>{h.height}</TableCell>
                    {viewMode === 'view' ? null : (
                      <TableCell align="right">
                        <ScreeningManagerForm
                          screening={h}
                          updateState={setState}
                        />
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

export default Screening;
