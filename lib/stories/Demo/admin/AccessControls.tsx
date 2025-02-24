import { Button } from '../../../components';
import {MinusCircleIcon, PlusCircleIcon} from "@navikt/aksel-icons";

const GiveAccessButton = () => {
    return <Button icon={PlusCircleIcon} reverse size="sm" variant="outline">Gi fullmakt</Button>
  }

  const RevokeAccessButton = () => {
    return <Button icon={MinusCircleIcon} reverse size="sm" variant="text">Slett fullmakt</Button>
  }

  export const AccessControls = ({access}: {access:boolean}) => {
    return access ? <RevokeAccessButton /> : <GiveAccessButton />
}
