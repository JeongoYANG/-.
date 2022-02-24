import React, {useState} from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }){
    return (<div>
        <Table>
            <thead>
            <Tr>
                <Th><Header/></Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <Td>
                    {children}
                </Td>
            </Tr>
            <Tr>
                <Td><Footer/></Td>
            </Tr>
            </tbody>
        </Table>
    </div>)
}
const Table = styled.table`
    border: 1px solid #DD0000;
    width: 1000px;
    height: 500px;
    text-align: center;
`
const Tr = styled.tr`
    border: 1px solid #DD0000
`
const Th = styled.th`
    border: 1px solid #DD0000
`
const Td = styled.td`
    border: 1px solid #DD0000
`