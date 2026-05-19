import{j as t}from"./iframe-GJv3-kpe.js";import{S as a}from"./Handshake-BRkY11aa.js";import{S as e}from"./Bell-BTom6BN8.js";import{S as s}from"./Hashtag-rSQt18c9.js";import{S as n}from"./Files-C1kAKp57.js";import{A as p}from"./AccountListItem-CJUKdimH.js";import{L as m}from"./List-4WWtcier.js";import{A as l}from"./AccountListItemDetails-DC_HDK7o.js";import{B as c}from"./Button-XgEODhFb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1GQrjht.js";import"./ListItem-D03tI2LI.js";import"./index-D19pPnAw.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./lite-DaUVFjkg.js";import"./XMark-D7blLnze.js";import"./Icon-DKgAzIsH.js";import"./Skeleton-dVNdeapn.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-oF7p1rqv.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./HeartFill-BWVbn9KR.js";import"./ContextMenu-DR011-2b.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Dropdown-CFn-KtHz.js";import"./MenuElipsisHorizontal-C_K0JSPh.js";import"./SearchField-D4OrqN5V.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Checkmark-DXLqUvZZ.js";import"./ItemControls-3C4JbZ3m.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./Flex-CxS25VqD.js";import"./Section-BvBlt0Cn.js";import"./ButtonGroup-CkGxccE7.js";import"./Divider-CClaajVY.js";import"./SettingsItem-Zl-WEsCW.js";import"./SettingsItemBase-C5TELNS3.js";import"./ItemLink-Pose4tqX.js";import"./SettingsModal-BtcjVjo_.js";import"./ModalBody-C4Y7ExYH.js";import"./ButtonIcon-Bi2Ix8OH.js";import"./ButtonLabel-BZ1WKaDO.js";import"./AccountOrganization-D4fdJ_EL.js";import"./Byline-BYpWwJw1.js";import"./button-5jjXov6B.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
