import{j as t}from"./iframe-CbC-fLaY.js";import{S as o}from"./Handshake-I1zLCPee.js";import{S as e}from"./Bell-CTzeWleD.js";import{S as s}from"./Hashtag-BO0vihmc.js";import{S as n}from"./Files-w-WPugSK.js";import{A as p}from"./AccountListItem-BcUhyPto.js";import{L as m}from"./List-DoiqK_JD.js";import{A as l}from"./AccountListItemDetails-CKvIC-ki.js";import{B as c}from"./Button-B0m1rUs2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C2JQsT24.js";import"./ListItem-CnbC7rOU.js";import"./index-Ds9VDGIC.js";import"./Input-BNbo7Vjn.js";import"./tooltip-BtbQ4KG6.js";import"./XMark-DvUzU3_h.js";import"./Icon-DW3Nd0-m.js";import"./Skeleton-D8kEQByH.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";import"./HeartFill-BeQXSG1V.js";import"./ContextMenu-CmXEuRA_.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Dropdown-5e6GLlMG.js";import"./MenuElipsisHorizontal-DpFkC9Cn.js";import"./SearchField-yE8KzlZV.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./Label-DN-jQPwh.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./Checkmark-8GuDUS8U.js";import"./ItemControls-gQT1qCQ5.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./Flex-DahTG4Th.js";import"./Section-DypEBfCX.js";import"./ButtonGroup-BE0BnYMw.js";import"./Divider-BLGF5SlA.js";import"./SettingsItem-D_kPG1xK.js";import"./SettingsItemBase-CPLBMCbD.js";import"./ItemLink-BLkR3G3D.js";import"./SettingsModal-CMK7iPDJ.js";import"./ModalBody-Ce5L1hlw.js";import"./ButtonIcon-DWUAaYBn.js";import"./ButtonLabel-D9GeETuC.js";import"./AccountOrganization-BN8loGln.js";import"./Byline-BrWvWbOl.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
