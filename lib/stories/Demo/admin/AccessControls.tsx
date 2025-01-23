import { Button } from '../../../components';

const GiveAccessButton = () => {
    return <Button icon="plus-circle" reverse size="sm" variant="outline">Gi fullmakt</Button>
  }

  const RevokeAccessButton = () => {
    return <Button icon="minus-circle" reverse size="sm" variant="text">Slett fullmakt</Button>
  }

  export const AccessControls = ({access}) => {
    return access ? <RevokeAccessButton /> : <GiveAccessButton />
}
