var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-DwHkmT0f.js";import{S as l}from"./Handshake-mz41w3Ne.js";import{S as a}from"./Bell-CT4e3QFA.js";import{S as m}from"./Hashtag-CmRGQwIf.js";import{S as c}from"./Files-Dm6MIX32.js";import{A as g}from"./AccountListItem-BvzcSQvX.js";import{A as d}from"./AccountListItemDetails-CPTcrINV.js";import{L as u}from"./List-DiIBXxb2.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-Bk8TBf_Z.js";import"./Input-D6xvIcky.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";import"./ChevronRight-B3vSh-CA.js";import"./HeartFill-Dq4xiIhf.js";import"./ContextMenu-CEbN3Pip.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./ItemLabel-hjkm06Ot.js";import"./ItemControls-CCH_CI8A.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";import"./Section-BzvI0xQr.js";import"./Flex-DUzkq__j.js";import"./ButtonGroup-DYVDsbWZ.js";import"./Divider-zq1-fgGC.js";import"./SettingsItem-BJ38FgPP.js";import"./SettingsItemBase-CKmbFkX3.js";import"./ItemBase-Ck4UvHPX.js";import"./ItemLink-32-6kvwj.js";import"./SettingsModal-CgPo0XsY.js";import"./ModalBody-DRCMelZn.js";import"./ButtonIcon-BjFimnAA.js";import"./ButtonLabel-ByPzwwTy.js";import"./AccountOrganization-LMvm3aAW.js";import"./Byline-Cj00QcSW.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
