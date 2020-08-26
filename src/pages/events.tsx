import * as React from "react";
import {Header, Icon, Grid, Segment} from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const EventsPage = () =>
    <div>
        <Segment>
            <Header as={"h1"}>Events</Header>
        </Segment>
    </div>;

export default withLayout(EventsPage);
