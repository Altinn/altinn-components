import{r as g,j as t}from"./iframe-CK12xbO6.js";import{A as S}from"./AccountNotificationSettings-CNsw6oII.js";import{B as u}from"./Button-DTrhNbku.js";import{M as f}from"./ModalBase-CWztHKgS.js";import{M as x,a as X}from"./ModalBody-dRl9W8-E.js";import{L as C}from"./List-kHfgiCUp.js";import{S as j}from"./SettingsItem-Bak9OqBw.js";import{B as v}from"./ButtonGroup-BcyGdCwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Dy0A-1z0.js";import"./lite-DaUVFjkg.js";import"./index-BCgvi17I.js";import"./use-merge-refs-D5gu3XYQ.js";import"./Switch-CUp6PmYq.js";import"./index-DS2SSX1f.js";import"./Label-CQOYgwqz.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./TextField-CKyr9W1y.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./useHighlightedText-DdOMnBlO.js";import"./Skeleton-CLQkeaUO.js";import"./button-D6lkouap.js";import"./Section-BZGNeHVH.js";import"./Flex-DQqIzFyb.js";import"./XMark-MadrIoK8.js";import"./useId-CIOYGEMY.js";import"./Icon-BHUPQGzt.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Heading-Drr-of_9.js";import"./ListItem-vt36G1vI.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-D_0uwKbP.js";import"./ChevronDown-CccB8pUx.js";import"./ChevronRight-DxL2oOG5.js";import"./SettingsItemBase-66ZAoHms.js";import"./ItemLink-DnABx_vH.js";import"./ItemMedia-XHYq4GSc.js";import"./ItemControls-B1M2j2tm.js";import"./SettingsModal-DbdDWFfX.js";import"./ButtonIcon-CM44tsrg.js";import"./ButtonLabel-DzANo97U.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ht=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ht as __namedExportsOrder,Bt as default};
