import{a7 as t,c as o}from"./iframe-C2dzRmjh.js";import{S as s}from"./Handshake-Bui3bN7J.js";import{S as e}from"./Bell-CFAhbo75.js";import{S as n}from"./Hashtag-MTpkelkN.js";import{S as p}from"./Files-D2WsGaUf.js";import{A as l}from"./AccountListItem-DgltLLIE.js";import{A as m}from"./AccountListItemDetails-BJb0G0Vz.js";import{L as c}from"./List-DCnir31W.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-bz9Nyb5P.js";import"./Input-DA-lDvIm.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ChevronUp-DhNGyOn8.js";import"./ChevronDown-DT113Xv8.js";import"./ChevronRight-DtjNYNu3.js";import"./HeartFill-CKxTLM5T.js";import"./ContextMenu-C1mVo9es.js";import"./useDropdownMenuController-BTTkoYGq.js";import"./Dropdown-DtS9S0hY.js";import"./SearchField-uOvA63Zf.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./FieldBase-Dvh5lIYF.js";import"./Typography-DJs4mnKu.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./useMenu-BFtnvp_l.js";import"./MenuListItem-4Fso0lef.js";import"./MenuListDivider-F2YAa9H7.js";import"./MenuListHeading-C9cVAuQ-.js";import"./MenuItem-BNIi9g5E.js";import"./ItemMedia-BDW8lmrL.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./ItemControls-dnLa86IT.js";import"./InformationSquare-D0pKd-n8.js";import"./MenuElipsisHorizontal-C1iYD589.js";import"./Section-DIoxVkTZ.js";import"./Flex-Cz2ESd29.js";import"./ButtonGroup-BU_SIQJX.js";import"./Divider-Co9GtxZL.js";import"./SettingsItem-De5G2OUD.js";import"./SettingsItemBase-D_m37hJE.js";import"./ItemBase-BbocD9fV.js";import"./ItemLink-DOi6qrEf.js";import"./SettingsModal-BlxIbakF.js";import"./ModalBody-EYKNgO6y.js";import"./ButtonIcon-CeiijB1e.js";import"./ButtonLabel-BRr_e9Mc.js";import"./AccountOrganization-CUv8dFYP.js";import"./Byline-DimwUa3c.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
