import{r as g,j as t}from"./iframe-CXxOXnma.js";import{A as S}from"./AccountNotificationSettings-SZ-N2r_2.js";import{B as u}from"./Button-Dot-dF6F.js";import{M as f,a as x,b as X}from"./ModalBody-JOibBxNi.js";import{L as C}from"./List-CWN0grZu.js";import{S as j}from"./SettingsItem-CYSxt_Lt.js";import{B as v}from"./ButtonGroup-DA7guRJP.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BHpddb-0.js";import"./tooltip-F-8CLWbq.js";import"./Switch-DRnJSCoi.js";import"./index-DvzmMrBu.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./TextField-Q7sM8aCe.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useHighlightedText-Cggf4nMP.js";import"./Skeleton-DaZzKoDP.js";import"./Section-BI582Rxy.js";import"./Flex-Cdw8i_ge.js";import"./XMark-DvGwYctt.js";import"./useId-CYy4MNIP.js";import"./Icon-CyU2k-nr.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Heading-CD_Q6pfI.js";import"./ListItem-C7pcgmaV.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./ChevronUp-C7KI3ypM.js";import"./ChevronDown-BI53cl-V.js";import"./ChevronRight-fDr-lddl.js";import"./SettingsItemBase-hOyKlpdl.js";import"./ItemLink-pXD4ggni.js";import"./ItemMedia-BJW132yJ.js";import"./ItemControls-D969--fk.js";import"./SettingsModal-BLUe9oqE.js";import"./ButtonIcon-DRTRl_zA.js";import"./ButtonLabel-BtrlG-5t.js";const lt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
  const [formData, setFormData] = useState({
    ...args
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <AccountNotificationSettings {...args} {...formData} onChange={onChange} />;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  title = 'Aktør'
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Åpne modal</Button>
      <ModalBase open={open} onClose={onToggle}>
        <ModalHeader title={title}>
          <List>
            <SettingsItem id="bb" icon={{
            name: 'Bergen Bar',
            type: 'company'
          }} title="Bergen Bar" description="Org. nr. XXX XXX XXX" />
          </List>
        </ModalHeader>
        <ModalBody>
          <SmsAndEmailAlerts />
          <ButtonGroup>
            <Button onClick={onToggle}>Lagre og avslutt</Button>
            <Button onClick={onToggle} variant="outline">
              Avbryt
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...m.parameters?.docs?.source}}};const ut=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ut as __namedExportsOrder,lt as default};
