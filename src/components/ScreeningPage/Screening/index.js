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
import AddHtsForm from './AddHtsForm';
import NoDataCard from '../../NoDataComponent';
import HtsManagerForm from './HtsScreeningForm';


const Hts = () => {
  const { state: { viewMode } } = useAppContext();
  const [state, _setState] = React.useState({
    htss: [],
    loading: false,
    error: ''
  });

  const setState = s => _setState(prev => ({
    ...prev,
    ...(typeof s === 'function' ? s(prev) : s),
  }));


  const {htss} = state

React.useEffect(() => {
  (async () => {
    setState({ loading: true, });
    try {
      const htss  = await api.getAll();
      setState({ htss: htss || [], loading: false, });
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
              <AddHtsForm updateState={setState} />
            </>
          )}
          title="PATIENT HTS"
        />
         {htss.length<=0?
         (<NoDataCard />)
         :
        (<CardContent>
           
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient</TableCell>
                <TableCell>Hts Screening Date</TableCell>
                <TableCell>On Treatment</TableCell>
                <TableCell>Treatment Start Date</TableCell> 
                <TableCell>Result</TableCell>  
                <TableCell></TableCell>
                {viewMode === 'view' ? null : <TableCell align="right">Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {htss.map((h, i) => {
                return (
                  <TableRow key={`hts-${i}`}>
                    <TableCell>{h.hts.firstName} &nbsp; {h.hts.lastName}</TableCell>
                    <TableCell>{h.treatmentStartDate}</TableCell>
                    <TableCell>{h.screeningDate}</TableCell>
                    <TableCell>{h.htsResult}</TableCell>
                    {viewMode === 'view' ? null : (
                      <TableCell align="right">
                        <HtsManagerForm
                          hts={h}
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

export default Hts;
