import React, { useState } from 'react';
import {
    IconButton,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    InputLabel,
    MenuItem,
    Switch,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { bool } from 'prop-types';

const IncidenteTable = () => {
    const [addIncidente, setAddIncidente] = useState({
        titulo: '',
        descricao: '',
        criticidade: '',
        tipo: '',
        status: bool,
    });
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [criticidade, setCriticidade] = useState('');

    //create
    function createIncidente() {
        return null;
    }

    // //read
    // function readIncidente() {
    //     return null;
    // }

    // //update
    // function updateIncidente() {
    //     return null;
    // }

    // //delete
    // function deleteIncidente() {
    //     return null;
    // }

    return (
        <form>
            <Table
                // onSubmit={(event) => {
                //     createIncidente(event, incidente);
                // }}
                onSubmit={createIncidente()}
            >
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField
                                value={addIncidente.titulo}
                                onChange={(event) => {
                                    setAddIncidente(event.target.value);
                                }}
                                label="Título"
                                fullWidth={true}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                value={addIncidente.descricao}
                                onChange={(event) => {
                                    setAddIncidente(event.target.value);
                                }}
                                label="Descrição"
                                fullWidth={true}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputLabel>Criticidade</InputLabel>
                            <Select value="">
                                <MenuItem value={'baixa'}>Baixa</MenuItem>
                                <MenuItem value={'média'}>Média</MenuItem>
                                <MenuItem value={'alta'}>Alta</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <InputLabel>Status</InputLabel>
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                color="primary"
                                name="checkedB"
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <IconButton>
                                <AddCircleIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </form>
    );
};

export default IncidenteTable;
