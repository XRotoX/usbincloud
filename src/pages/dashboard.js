import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumbs'
import CenteredGrid from '../components/Grid'
import ImgMediaCard from '../components/File'
import Containero from '../components/Container'
import CreateButton from '../components/CreateButton'
import { useParams, useLocation } from "react-router-dom"
import { useFolder } from "../utils/useFolder"



export default function Dashboard(props) {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
    return (
        <React.Fragment>
            <Navigation>
                <Containero>
                    <Breadcrumb />
                    <CenteredGrid>
                        <ImgMediaCard />
                        <ImgMediaCard />
                        <ImgMediaCard />
                        <ImgMediaCard />
                        <ImgMediaCard />
                    </CenteredGrid>
                </Containero>
            </Navigation>
            <CreateButton />


        </React.Fragment>
    )
}