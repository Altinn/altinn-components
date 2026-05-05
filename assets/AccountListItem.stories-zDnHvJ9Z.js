import{j as t}from"./iframe-0tjTS8nX.js";import{S as a}from"./Handshake-ntGA7pxA.js";import{S as e}from"./Bell-BGb4n8GH.js";import{S as s}from"./Hashtag-DAxd7pMx.js";import{S as n}from"./Files-D0f--acP.js";import{A as p}from"./AccountListItem-BjwFVrHS.js";import{L as m}from"./List-lf1yby5Z.js";import{A as l}from"./AccountListItemDetails-BRIgOGmj.js";import{B as c}from"./Button-CyTdDQsP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNFZveVv.js";import"./ListItem-BchTOoTJ.js";import"./index-BHkRJabC.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./lite-DaUVFjkg.js";import"./XMark-C6HGzv3s.js";import"./Icon-CEoRGh9j.js";import"./Skeleton-CiSYBb75.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-O5ch3n.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./ChevronRight-DKBz6hgL.js";import"./HeartFill-DxduMAeN.js";import"./ContextMenu-fefVb9IK.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Checkmark-DcFVdWi8.js";import"./ItemControls-C9C9Xohr.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./Flex-BjLBa1JB.js";import"./Section-CVxfq1Zs.js";import"./ButtonGroup-Rh1_zGFF.js";import"./Divider-BpiCxUGI.js";import"./SettingsItem-DLLy9LaI.js";import"./SettingsItemBase-BnCBqOeC.js";import"./ItemLink-Rfzdlob3.js";import"./SettingsModal-Zr84fz_q.js";import"./ModalBody-C_UFaejr.js";import"./ButtonIcon-oMKrN6P3.js";import"./ButtonLabel-BqSuwMNK.js";import"./AccountOrganization-Ci4HyMSN.js";import"./Byline-B7hF81ln.js";import"./button-Cld0y5Q3.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
