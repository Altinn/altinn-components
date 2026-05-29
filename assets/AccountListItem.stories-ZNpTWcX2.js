import{p as t}from"./iframe-D7BK96qe.js";import{S as a}from"./Handshake-DjXtWac3.js";import{S as e}from"./Bell-C4qxT1ql.js";import{S as s}from"./Hashtag-B5mo0BhM.js";import{S as n}from"./Files-xG74C-7o.js";import{A as p}from"./AccountListItem-BlZUpXkl.js";import{A as m}from"./AccountListItemDetails-DFK1Mz7l.js";import{B as l}from"./Button-UbmuloFB.js";import{L as c}from"./List-D3gzZVMY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1IjdNvC.js";import"./ListItem-BwjNTMuN.js";import"./index-CL9j6gFH.js";import"./Input-wwG44gvy.js";import"./tooltip-B8elfXS-.js";import"./XMark-DKvmykI8.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";import"./HeartFill-BglTcypd.js";import"./ContextMenu-CkW9u7kb.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./SearchField-D67W67ub.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./FieldBase-DmZ-AQhF.js";import"./Typography-CoOY9SxO.js";import"./Label-DW0yr3EV.js";import"./useMenu-CRon1bQ1.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./ItemControls-BZAZaWU9.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./MenuElipsisHorizontal-Cv2I31dy.js";import"./Section-G7MRDbZ9.js";import"./Flex-DKrdkBVD.js";import"./ButtonGroup-DiPjg2lm.js";import"./Divider-DoxmSZvL.js";import"./SettingsItem-CWh4R9nI.js";import"./SettingsItemBase-Dl_TEGd7.js";import"./ItemBase-BknciWr5.js";import"./ItemLink-BHcTvWw3.js";import"./SettingsModal-ygENr3l7.js";import"./ModalBody-CO_In9L6.js";import"./ButtonIcon-DuHIMlrP.js";import"./ButtonLabel-fpKRE7dz.js";import"./AccountOrganization-zOUA30GS.js";import"./Byline-Q4XhunLC.js";const Bt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const It=["Default","Expanded"];export{r as Default,i as Expanded,It as __namedExportsOrder,Bt as default};
