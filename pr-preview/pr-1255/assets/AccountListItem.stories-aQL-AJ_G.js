import{a7 as t,c as o}from"./iframe-CTaNoWWa.js";import{S as s}from"./Handshake-DNG8S4rs.js";import{S as e}from"./Bell-evwoybZo.js";import{S as n}from"./Hashtag-BuCLwtKO.js";import{S as p}from"./Files-BTW7IcHM.js";import{A as m}from"./AccountListItem-BnG3PtYz.js";import{A as l}from"./AccountListItemDetails-Dvn2q9CY.js";import{L as c}from"./List-BWBH_N2R.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-bITmjQKl.js";import"./Input-CTz4y9O9.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";import"./HeartFill-DLl89KL7.js";import"./ContextMenu-DJ_K9wJs.js";import"./useDropdownMenuController-BJZIrHL7.js";import"./Dropdown-CgaJWkpX.js";import"./SearchField-ybvTeITK.js";import"./MagnifyingGlass-DGspW_mh.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./useMenu-CpFtChbI.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuListDivider-CkCLDcCQ.js";import"./MenuListHeading-Gc6ll2v1.js";import"./MenuItem-CimdO91p.js";import"./ItemMedia-wY5sofun.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./ItemControls-DMuz6Cbk.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";import"./MenuElipsisHorizontal-eegx-ga-.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./ButtonGroup-DcAUocsW.js";import"./Divider-DGpuBlLt.js";import"./SettingsItem-DpGl7SN3.js";import"./SettingsItemBase-CvuyejAQ.js";import"./ItemBase-DKpUUlFO.js";import"./ItemLink-B-O_qCzl.js";import"./SettingsModal-BQMqrzAH.js";import"./ModalBody-Dfwh0Tur.js";import"./ButtonIcon-TLZW9XLN.js";import"./ButtonLabel-5YzgT7kC.js";import"./AccountOrganization-Dcn2Zohu.js";import"./Byline-D8B8SQTU.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
