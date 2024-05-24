import { ButtonLink } from '#components/ButtonLink';
import { resolvePath } from '#utils/resolvePath';

export function InvitationLink () {
  return (
    <ButtonLink href={resolvePath('/')}>
      Request Invite
    </ButtonLink>
  );
}