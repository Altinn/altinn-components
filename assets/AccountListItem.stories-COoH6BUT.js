import{a7 as t,c as o}from"./iframe-DymAqe7-.js";import{S as s}from"./Handshake-IPGh4rPw.js";import{S as e}from"./Bell-DXnneXz8.js";import{S as n}from"./Hashtag-jdViuZBl.js";import{S as p}from"./Files-WYp-U0OQ.js";import{A as l}from"./AccountListItem-DVxqAyfR.js";import{A as m}from"./AccountListItemDetails-DGumjeVs.js";import{L as c}from"./List-BFVNMUvv.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Bmm1NlzL.js";import"./Input-XXqZV2PD.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./Heading-D0_eZ5cX.js";import"./useHighlightedText-CHgJbocK.js";import"./ChevronUp-DmvfmoSK.js";import"./ChevronDown-D0JeQuoP.js";import"./ChevronRight-DBeZxa-Y.js";import"./HeartFill-_yipu7Ih.js";import"./ContextMenu-B6RF4Vop.js";import"./useDropdownMenuController-DAEYpjlT.js";import"./Dropdown-Cp-0Evcf.js";import"./SearchField-BGWHdZv0.js";import"./MagnifyingGlass-DYyWgrew.js";import"./FieldBase-CV5Nsw3m.js";import"./Typography-CpmuPi_2.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./useMenu-B3cy-uAB.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuListDivider-D_6Pn6hY.js";import"./MenuListHeading-D0t38-BK.js";import"./MenuItem-Q0-LXmKI.js";import"./ItemMedia-BNXDJXQ4.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./ItemControls-DPpG0bqy.js";import"./InformationSquare-DzVIiFVQ.js";import"./MenuElipsisHorizontal-DLk1idta.js";import"./Section-VcJzw9XS.js";import"./Flex-SVKdN4dv.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./Divider-5puRdG7X.js";import"./SettingsItem-CvR4LB0k.js";import"./SettingsItemBase-CcCy9gQm.js";import"./ItemBase-CCp86b5G.js";import"./ItemLink-BckblcU7.js";import"./SettingsModal-BR0dL4iR.js";import"./ModalBody-B4NkrjfW.js";import"./ButtonIcon-X8AJhbmq.js";import"./ButtonLabel-CUwAx-eR.js";import"./AccountOrganization-C6kWbtf9.js";import"./Byline-wvHK-UuT.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
