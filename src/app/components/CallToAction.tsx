import Link from "next/link";

type CallToActionProps = {
  background: string;
}

const CallToAction: React.FC<CallToActionProps> = ({background}) => {

  return (
    <div style={{background: background}} className="call-to-action">
      <Link href="/new-student">Register Now!</Link>
    </div>
  )
}

export default CallToAction;