import { Fragment, useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { UserList } from "./UserList/UserList";

const User = () => {
    const [viewMode, setViewMode] = useState(false);
    const onChangeViewMode = () => (
        setViewMode(!viewMode)
    )
    return (
    <Fragment>
        <Header />
            <button type="button" onClick={onChangeViewMode}>Click Me</button>
        <UserList useMode={viewMode}/>
        <Footer />
    </Fragment>
    );
}

export default User;