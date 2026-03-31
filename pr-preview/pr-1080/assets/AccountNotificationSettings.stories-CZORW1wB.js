import{r as g,j as t}from"./iframe-CRyMHjBa.js";import{A as S}from"./AccountNotificationSettings-COWl5mwG.js";import{B as u}from"./Button-CrFbX_o6.js";import{M as h}from"./ModalBase-yMC1x3OO.js";import{M as x,a as v}from"./ModalBody-Cn1xB_Vi.js";import{L as X}from"./List-RBs8EUgU.js";import{S as C}from"./SettingsItem-BbsPge-I.js";import{B as j}from"./ButtonGroup-Be2TeWIw.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-g577H5k-.js";import"./lite-DaUVFjkg.js";import"./index-DK7gfoBf.js";import"./use-merge-refs-BY8NGhF3.js";import"./Switch-FFOJZeUz.js";import"./index-DHHnxdIx.js";import"./Label-BTqPQVQX.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./TextField-x3HX7SH4.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./button-W5jAAf--.js";import"./Section-CFSk5LUB.js";import"./Flex-B-FAPRYp.js";import"./XMark-Bzo2iZ4y.js";import"./useId-Gvikg1Q9.js";import"./Icon-BfxILC1T.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Heading-DKMjfDI1.js";import"./ListItem-DD-4gcQV.js";import"./Badge-DxjDnsAp.js";import"./ChevronUp-CBBTERwT.js";import"./ChevronDown-BlPSQm6Z.js";import"./ChevronRight-CBrYYsjR.js";import"./SettingsItemBase-BxbYqQ6C.js";import"./SettingsModal-DI6vhMWA.js";import"./ButtonIcon-DQSQ565Q.js";import"./ButtonLabel-B13q6XrT.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <SettingsItem id="bb" interactive={false} icon={{
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
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
