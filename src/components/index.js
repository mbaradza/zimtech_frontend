import React from "react";
import { useNavigate,Routes,Route} from "react-router-dom";
import { Page } from './Layout';
import NavMenu from '../components/Home/NavMenu';
import LazyPage from './LazyPage';


const PatientsPage = LazyPage(() => import('./PatientsPage'));
const PatientViewPage = LazyPage(()=>import('./PatientsPage/Patients/PatientView'))
const HtsPage = LazyPage(()=>import('./HtsPage '))

const Components = () => {
    const navigate = useNavigate();

    return (
        <>
        <div>
      
        <Page>
        <NavMenu />
            <Routes>
                <Route path='/patients' element={<PatientsPage />} />
                <Route path='/' element={<PatientsPage />} />
                <Route path='/patients/view' element={< PatientViewPage/>} />
                <Route path = '/hts' element={<HtsPage/>}/>
                <Route render={() =>navigate('/patients')} />
            </Routes>
        </Page>
        </div>

        </>
      )

}
export default Components;
