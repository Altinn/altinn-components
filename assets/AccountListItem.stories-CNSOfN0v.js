import{j as t}from"./iframe-xsOFb0qB.js";import{S as a}from"./Handshake-BRBUeNkp.js";import{S as e}from"./Bell-lzchwu9E.js";import{S as s}from"./Hashtag-B7Sswhr2.js";import{S as n}from"./Files-ChM2sBt6.js";import{A as p}from"./AccountListItem-QGLPPeMT.js";import{L as m}from"./List-BS8-H1t5.js";import{A as l}from"./AccountListItemDetails-DrK9NXfW.js";import{B as c}from"./Button-BpTRR-R2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BSkX16Wf.js";import"./ListItem-BXgv5KEl.js";import"./index-C2Njje4x.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./lite-DaUVFjkg.js";import"./XMark-CIyVPbna.js";import"./Icon-Bfs0jdaJ.js";import"./Skeleton-DBfNAA4T.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CVCJxog4.js";import"./Heading-CKV0OzUJ.js";import"./useHighlightedText-DlnkJmvJ.js";import"./ChevronUp-DtTCTXgH.js";import"./ChevronDown-DgTX1k3o.js";import"./ChevronRight-C-KQY4Ee.js";import"./HeartFill-BI770wDo.js";import"./ContextMenu-BmVXKH9P.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Dropdown-DSeVnfau.js";import"./MenuElipsisHorizontal-KvoLWB-I.js";import"./SearchField-CkGqv4yc.js";import"./MagnifyingGlass--8bC5kd2.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Checkmark-Bxt0Ippd.js";import"./ItemControls-a4lEiOE5.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./Flex-D9aEciRT.js";import"./Section-B92vWqdI.js";import"./ButtonGroup-C6oYdo0U.js";import"./Divider-ChjlQzsl.js";import"./SettingsItem-BA3Nt4Rt.js";import"./SettingsItemBase-Bj8jNJ8o.js";import"./ItemLink-D5ErANnm.js";import"./SettingsModal-DY4S-rNA.js";import"./ModalBody-CU-34hyC.js";import"./ButtonIcon-CgcH6LiT.js";import"./ButtonLabel-BYEs_GZq.js";import"./AccountOrganization-DZyx_naY.js";import"./Byline-B4P4G46m.js";import"./button-_KGDSi7k.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
