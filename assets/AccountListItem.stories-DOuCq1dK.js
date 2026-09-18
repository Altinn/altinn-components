import{a7 as t,c as o}from"./iframe-CId_qj2z.js";import{S as s}from"./Handshake-BLUyx3lp.js";import{S as e}from"./Bell-BNMNXMcz.js";import{S as n}from"./Hashtag-DiE1V6e4.js";import{S as p}from"./Files-CiLllfN2.js";import{A as l}from"./AccountListItem-BxsJyGPN.js";import{A as m}from"./AccountListItemDetails-CoWiYP5r.js";import{L as c}from"./List-DXvLeeCM.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-UVHT4kno.js";import"./Input-qq9zM3Qu.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";import"./HeartFill-BeCjgmIE.js";import"./ContextMenu-Cr3y-cbT.js";import"./useDropdownMenuController-B3cgP-Sn.js";import"./Dropdown-C5rYnJno.js";import"./SearchField-CLqhaeqA.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./ItemControls-s3x5r9Y_.js";import"./InformationSquare-DbymG94h.js";import"./MenuElipsisHorizontal-DurHs02G.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./ButtonGroup-BzI-lfVi.js";import"./Divider-B3nRNDbv.js";import"./SettingsItem-jVVCw9XU.js";import"./SettingsItemBase-DJsVo98M.js";import"./ItemBase-Bm8A6BXO.js";import"./ItemLink-BiQUVyar.js";import"./SettingsModal-Ypx-VLJc.js";import"./ModalBody-Dz1aFIAA.js";import"./ButtonIcon-6rERrVIq.js";import"./ButtonLabel-CxcuksMv.js";import"./AccountOrganization-DSZ3negl.js";import"./Byline-DOwBsB16.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
