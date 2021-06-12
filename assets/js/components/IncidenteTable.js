import React, { useContext } from 'react';
import {
    Select,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    InputLabel,
    MenuItem,
    Switch,
    Button,
} from '@material-ui/core';
import { GlobalContext } from '../context/GlobalContext';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const IncidenteTable = () => {
    const global = useContext(GlobalContext);

    function handleSubmit(event) {
        event.preventDefault();
        global.getValue;
        fetch('/api/incidente/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(global.form),
        })
            .then((response) => {
                global.setSucesso(true);
                global.getValue();
                global.limparForm();
                return response.json();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    function handleUpdate(event) {
        event.preventDefault();
        fetch('/api/incidente/' + global.form.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(global.form),
        })
            .then((response) => {
                global.setIsSucessEdited(true);
                global.getValue();
                global.limparForm();
                global.setEditMode(false); //sumir com o btcEditar
                return response.json();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    function handleChange({ target }) {
        const { name, value } = target;
        switch (name) {
            case 'status':
                global.setForm({ ...global.form, status: !global.form.status });
                break;

            default:
                global.setForm({ ...global.form, [name]: value });
                break;
        }
    }

    return (
        <form>
            <Table onSubmit={handleSubmit}>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField
                                value={global.form.titulo}
                                name="titulo"
                                onChange={handleChange}
                                label="Título"
                                fullWidth={true}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                value={global.form.descricao}
                                name="descricao"
                                onChange={handleChange}
                                label="Descrição"
                                fullWidth={true}
                                rows="3"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputLabel>Criticidade</InputLabel>
                            <Select
                                name="criticidade"
                                value={global.form.criticidade}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem disabled>Selecione</MenuItem>
                                <MenuItem value={'Baixa'}>Baixa</MenuItem>
                                <MenuItem value={'Média'}>Média</MenuItem>
                                <MenuItem value={'Alta'}>Alta</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <InputLabel>Tipo</InputLabel>
                            <Select
                                name="tipo"
                                value={global.form.tipo}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem disabled>Selecione</MenuItem>
                                <MenuItem value={'Alarme'}>Alarme</MenuItem>
                                <MenuItem value={'Incidente'}>
                                    Incidente
                                </MenuItem>
                                <MenuItem value={'Outros'}>Outros</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <InputLabel>Status</InputLabel>
                            <Switch
                                name="status"
                                checked={global.form.status}
                                onChange={handleChange}
                                color="primary"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            {!global.editMode ? (
                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                >
                                    Salvar
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleUpdate}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<EditIcon />}
                                >
                                    Editar
                                </Button>
                            )}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </form>
    );
};

export default IncidenteTable;
