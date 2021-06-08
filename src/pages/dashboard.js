import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumbs'
import CenteredGrid from '../components/Grid'
import File from '../components/File'
import DisplayContainer from '../components/Container'
import CreateButton from '../components/CreateButton'
import { useParams, useLocation } from "react-router-dom"
import { useFolder } from "../utils/useFolder"
import Grid from '@material-ui/core/Grid'
import { Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

//
import CheckoutForm from './payment';




export default function Dashboard(props) {
    const { itemId } = props.match.params
    const { state = {} } = useLocation()
    const { folder, childFolders, childFiles } = useFolder(itemId, state.folder)

    console.log({ folder, childFolders, childFiles })

    if (folder) document.title = folder.name === "Root" ? "Home | USB in Cloud" : `${folder.name} | USB in Cloud`;

    return (
        <>
            <Navigation currentFolder={folder} >
                <DisplayContainer>
                    <Breadcrumb currentFolder={folder} />
                    <Grid container spacing={2}>
                        <Suspense fallback={<CircularProgress />}>
                            <CenteredGrid>
                                {childFolders.length > 0 && (
                                    childFolders.map(childFolder => (
                                        <File key={childFolder.id} metadata={childFolder} />
                                    ))
                                )}
                                {childFiles.length > 0 && (
                                    childFiles.map(childFile => (
                                        <File key={childFile.id} metadata={{...childFile, "type":"file"}} />
                                    ))
                                )}
                            </CenteredGrid>
                        </Suspense>
                    </Grid>
                </DisplayContainer>
            </Navigation>
            <CreateButton currentFolder={folder} />
            {/* <CheckoutForm /> */}
        </>
    )

}